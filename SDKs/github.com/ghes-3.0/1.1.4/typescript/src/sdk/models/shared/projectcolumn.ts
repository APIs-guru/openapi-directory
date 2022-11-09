import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProjectColumn
/** 
 * Project columns contain cards of work.
**/
export class ProjectColumn extends SpeakeasyBase {
  @Metadata({ data: "json, name=cards_url" })
  cardsUrl: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=project_url" })
  projectUrl: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @Metadata({ data: "json, name=url" })
  url: string;
}
