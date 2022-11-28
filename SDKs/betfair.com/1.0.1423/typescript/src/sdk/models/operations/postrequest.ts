import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class PostRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allResponseTypesExample?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
