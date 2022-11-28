import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PrivateData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=referenceId" })
  referenceId?: string;

  @SpeakeasyMetadata({ data: "json, name=referencePayload" })
  referencePayload?: string;
}
