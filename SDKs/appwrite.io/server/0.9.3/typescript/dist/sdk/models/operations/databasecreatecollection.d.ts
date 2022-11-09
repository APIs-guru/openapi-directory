import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DatabaseCreateCollectionRequestBody extends SpeakeasyBase {
    name: string;
    read: string[];
    rules: string[];
    write: string[];
}
export declare class DatabaseCreateCollectionSecurity extends SpeakeasyBase {
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class DatabaseCreateCollectionRequest extends SpeakeasyBase {
    request?: DatabaseCreateCollectionRequestBody;
    security: DatabaseCreateCollectionSecurity;
}
export declare class DatabaseCreateCollectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    collection?: shared.Collection;
}
