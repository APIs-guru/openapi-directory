import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class IsVpcPeeredResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isPeered" })
  isPeered?: boolean;
}
