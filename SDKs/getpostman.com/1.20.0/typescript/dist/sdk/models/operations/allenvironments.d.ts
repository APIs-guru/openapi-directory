import { SpeakeasyBase } from "../../../internal/utils";
export declare class AllEnvironments200ApplicationJsonEnvironments extends SpeakeasyBase {
    id?: string;
    name?: string;
    owner?: string;
    uid?: string;
}
export declare class AllEnvironments200ApplicationJson extends SpeakeasyBase {
    environments?: AllEnvironments200ApplicationJsonEnvironments[];
}
export declare class AllEnvironmentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    allEnvironments200ApplicationJsonObject?: AllEnvironments200ApplicationJson;
}
