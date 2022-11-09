import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LegalNoticeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  legalNotice200TextPlainString?: string;

  @Metadata()
  statusCode: number;
}
