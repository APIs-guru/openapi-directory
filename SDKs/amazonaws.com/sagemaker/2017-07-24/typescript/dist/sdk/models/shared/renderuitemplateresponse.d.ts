import { SpeakeasyBase } from "../../../internal/utils";
import { RenderingError } from "./renderingerror";
export declare class RenderUiTemplateResponse extends SpeakeasyBase {
    errors: RenderingError[];
    renderedContent: string;
}
