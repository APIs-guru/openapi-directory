import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LegalNoticeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  legalNotice200TextPlainString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
