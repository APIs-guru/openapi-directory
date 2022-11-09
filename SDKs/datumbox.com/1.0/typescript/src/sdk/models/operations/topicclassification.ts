import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TopicClassificationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=api_key;" })
  apiKey: string;

  @Metadata({ data: "form, name=text;" })
  text?: string;
}


export class TopicClassificationRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: TopicClassificationRequestBody;
}


export class TopicClassificationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
