import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostBinResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createStatus?: any;

  @Metadata()
  error?: any;

  @Metadata()
  statusCode: number;
}
