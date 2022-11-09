import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MergeAForkRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination" })
  destination?: string;

  @Metadata({ data: "json, name=source" })
  source?: string;

  @Metadata({ data: "json, name=strategy" })
  strategy?: string;
}


export class MergeAForkRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: MergeAForkRequestBody;
}


export class MergeAForkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
