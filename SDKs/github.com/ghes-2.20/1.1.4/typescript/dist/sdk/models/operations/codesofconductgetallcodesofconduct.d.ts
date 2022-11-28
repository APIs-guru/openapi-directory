import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CodesOfConductGetAllCodesOfConduct415ApplicationJson extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class CodesOfConductGetAllCodesOfConductResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    codeOfConducts?: shared.CodeOfConduct[];
    codesOfConductGetAllCodesOfConduct415ApplicationJsonObject?: CodesOfConductGetAllCodesOfConduct415ApplicationJson;
}
