import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IssueEventProjectCard
/** 
 * Issue Event Project Card
**/
export class IssueEventProjectCard extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_name" })
  columnName: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=previous_column_name" })
  previousColumnName?: string;

  @Metadata({ data: "json, name=project_id" })
  projectId: number;

  @Metadata({ data: "json, name=project_url" })
  projectUrl: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}
