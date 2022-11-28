import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProjectsResponse extends SpeakeasyBase {
    contentType: string;
    projects?: shared.Project[];
    statusCode: number;
}
