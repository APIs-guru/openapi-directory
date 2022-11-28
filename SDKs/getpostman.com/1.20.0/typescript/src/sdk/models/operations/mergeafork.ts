import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MergeAForkRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=strategy" })
  strategy?: string;
}


export class MergeAForkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: MergeAForkRequestBody;
}


export class MergeAForkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
