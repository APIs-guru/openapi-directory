import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPublicPreviewResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  samsungPreview?: shared.SamsungPreview;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
