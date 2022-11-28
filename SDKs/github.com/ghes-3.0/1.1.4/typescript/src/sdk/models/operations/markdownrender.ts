import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MarkdownRenderRequestBodyModeEnum {
    Markdown = "markdown",
    Gfm = "gfm"
}


export class MarkdownRenderRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=context" })
  context?: string;

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: MarkdownRenderRequestBodyModeEnum;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text: string;
}


export class MarkdownRenderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: MarkdownRenderRequestBody;
}


export class MarkdownRenderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  markdownRender200TextHtmlString?: string;
}
