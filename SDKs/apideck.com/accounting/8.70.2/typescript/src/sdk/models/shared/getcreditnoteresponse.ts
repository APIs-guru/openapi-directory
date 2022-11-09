import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CreditNote } from "./creditnote";


export class GetCreditNoteResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: CreditNote;

  @Metadata({ data: "json, name=operation" })
  operation: string;

  @Metadata({ data: "json, name=resource" })
  resource: string;

  @Metadata({ data: "json, name=service" })
  service: string;

  @Metadata({ data: "json, name=status" })
  status: string;

  @Metadata({ data: "json, name=status_code" })
  statusCode: number;
}
