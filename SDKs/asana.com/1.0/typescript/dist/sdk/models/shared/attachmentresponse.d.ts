import { SpeakeasyBase } from "../../../internal/utils";
export declare class AttachmentResponseParent extends SpeakeasyBase {
    gid?: string;
    name?: string;
    resourceType?: string;
}
export declare class AttachmentResponse extends SpeakeasyBase {
    createdAt?: Date;
    downloadUrl?: string;
    gid?: string;
    host?: string;
    name?: string;
    parent?: AttachmentResponseParent;
    resourceSubtype?: any;
    resourceType?: string;
    viewUrl?: string;
}
