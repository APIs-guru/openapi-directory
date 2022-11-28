import { SpeakeasyBase } from "../../../internal/utils";
import { Integrations } from "./integrations";
export declare class GetApplicationResponse extends SpeakeasyBase {
    arn?: string;
    associatedResourceCount?: number;
    creationTime?: Date;
    description?: string;
    id?: string;
    integrations?: Integrations;
    lastUpdateTime?: Date;
    name?: string;
    tags?: Map<string, string>;
}
