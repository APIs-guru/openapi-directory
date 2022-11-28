import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListArtifactsResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    listArtifacts200ApplicationJsonStrings?: string[];
}
