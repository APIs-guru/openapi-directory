import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A collection of rich text that will be displayed as a preview to another app.
 *
 * This is read-only except for a small group of whitelisted apps.
**/
export declare class Preview extends SpeakeasyBase {
    fallback?: string;
    footer?: string;
    header?: string;
    headerLink?: string;
    htmlText?: string;
    text?: string;
    title?: string;
    titleLink?: string;
}
