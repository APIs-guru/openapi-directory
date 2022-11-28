import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FileTypeEnum {
    Logo = "LOGO",
    Banner = "BANNER",
    Screenshot = "SCREENSHOT"
}
export declare class File extends SpeakeasyBase {
    contentType?: string;
    createdAt?: Date;
    id?: string;
    type?: FileTypeEnum;
    updatedAt?: Date;
    url: string;
}
