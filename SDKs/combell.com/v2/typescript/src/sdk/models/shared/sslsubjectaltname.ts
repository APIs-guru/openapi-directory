import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SslSubjectAltNameTypeEnum } from "./sslsubjectaltnametypeenum";



export class SslSubjectAltName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: SslSubjectAltNameTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
