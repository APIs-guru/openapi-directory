import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPersonByIdQueryParams extends SpeakeasyBase {
    apiKey: string;
    userId?: string;
}
export declare class GetPersonById200ApplicationJson extends SpeakeasyBase {
    person?: shared.Person;
    stat?: string;
}
export declare class GetPersonByIdRequest extends SpeakeasyBase {
    queryParams: GetPersonByIdQueryParams;
}
export declare class GetPersonByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getPersonById200ApplicationJsonObject?: GetPersonById200ApplicationJson;
}
