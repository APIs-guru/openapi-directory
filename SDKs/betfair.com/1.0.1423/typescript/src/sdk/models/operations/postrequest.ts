import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostRequestRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class PostRequestResponse extends SpeakeasyBase {
  @Metadata()
  allResponseTypesExample?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
