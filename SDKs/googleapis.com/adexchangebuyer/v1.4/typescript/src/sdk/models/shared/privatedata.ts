import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PrivateData extends SpeakeasyBase {
  @Metadata({ data: "json, name=referenceId" })
  referenceId?: string;

  @Metadata({ data: "json, name=referencePayload" })
  referencePayload?: string;
}
