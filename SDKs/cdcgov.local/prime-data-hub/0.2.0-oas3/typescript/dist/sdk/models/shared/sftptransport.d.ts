import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a single SFTP connection in all of it variations
**/
export declare class SftpTransport extends SpeakeasyBase {
    filePath: string;
    host: string;
    port: number;
    type: string;
}
