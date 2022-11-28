import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RenderingError } from "./renderingerror";



export class RenderUiTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Errors", elemType: RenderingError })
  errors: RenderingError[];

  @SpeakeasyMetadata({ data: "json, name=RenderedContent" })
  renderedContent: string;
}
