import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ByteMatchSetUpdate } from "./bytematchsetupdate";
export declare class UpdateByteMatchSetRequest extends SpeakeasyBase {
    byteMatchSetId: string;
    changeToken: string;
    updates: ByteMatchSetUpdate[];
}
