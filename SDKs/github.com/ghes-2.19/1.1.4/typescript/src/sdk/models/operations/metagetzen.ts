import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MetaGetZenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  metaGetZen200TextPlainString?: string;
}
