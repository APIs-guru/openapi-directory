import { SpeakeasyBase } from "../../../internal/utils";
import { ByteMatchSetUpdate } from "./bytematchsetupdate";
export declare class UpdateByteMatchSetRequest extends SpeakeasyBase {
    byteMatchSetId: string;
    changeToken: string;
    updates: ByteMatchSetUpdate[];
}
