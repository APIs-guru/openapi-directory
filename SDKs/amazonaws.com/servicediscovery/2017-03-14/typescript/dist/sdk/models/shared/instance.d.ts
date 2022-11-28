import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A complex type that contains information about an instance that Cloud Map creates when you submit a <code>RegisterInstance</code> request.
**/
export declare class Instance extends SpeakeasyBase {
    attributes?: Map<string, string>;
    creatorRequestId?: string;
    id: string;
}
