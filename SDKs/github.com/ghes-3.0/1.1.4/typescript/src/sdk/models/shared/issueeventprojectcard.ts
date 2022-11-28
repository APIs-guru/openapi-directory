import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IssueEventProjectCard
/** 
 * Issue Event Project Card
**/
export class IssueEventProjectCard extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column_name" })
  columnName: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=previous_column_name" })
  previousColumnName?: string;

  @SpeakeasyMetadata({ data: "json, name=project_id" })
  projectId: number;

  @SpeakeasyMetadata({ data: "json, name=project_url" })
  projectUrl: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
