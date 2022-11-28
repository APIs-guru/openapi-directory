import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetIpSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IPSetId" })
  ipSetId: string;
}
