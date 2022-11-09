import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostErc20Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  empty?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
