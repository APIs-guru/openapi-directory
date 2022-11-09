import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class IsVpcPeeredResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=isPeered" })
  isPeered?: boolean;
}
