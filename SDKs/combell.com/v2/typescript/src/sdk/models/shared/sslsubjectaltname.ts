import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SslSubjectAltNameTypeEnum } from "./sslsubjectaltnametypeenum";


export class SslSubjectAltName extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: SslSubjectAltNameTypeEnum;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
