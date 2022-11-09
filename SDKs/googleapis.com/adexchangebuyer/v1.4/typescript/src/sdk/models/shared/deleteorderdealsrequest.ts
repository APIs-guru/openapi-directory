import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteOrderDealsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=dealIds" })
  dealIds?: string[];

  @Metadata({ data: "json, name=proposalRevisionNumber" })
  proposalRevisionNumber?: string;

  @Metadata({ data: "json, name=updateAction" })
  updateAction?: string;
}
