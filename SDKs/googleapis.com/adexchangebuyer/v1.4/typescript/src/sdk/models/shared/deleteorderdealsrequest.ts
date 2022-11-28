import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteOrderDealsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dealIds" })
  dealIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=proposalRevisionNumber" })
  proposalRevisionNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=updateAction" })
  updateAction?: string;
}
