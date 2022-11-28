import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProjectColumn
/** 
 * Project columns contain cards of work.
**/
export class ProjectColumn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cards_url" })
  cardsUrl: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "json, name=project_url" })
  projectUrl: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
