import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchTodoQueryParams extends SpeakeasyBase {
    changedateFrom?: Date;
    changedateTo?: Date;
    createdateFrom?: Date;
    createdateTo?: Date;
    description?: string;
    filesuffix?: string;
    fromdate?: Date;
    group?: string;
    max?: number;
    maxlatitude?: number;
    maxlongitude?: number;
    minlatitude?: number;
    minlongitude?: number;
    name?: string;
    searchDbTodoCategory?: string;
    searchDbTodoChecked?: boolean;
    searchDbTodoTitle?: string;
    skip?: number;
    text?: string;
    todate?: Date;
}
export declare class SearchTodoRequest extends SpeakeasyBase {
    queryParams: SearchTodoQueryParams;
}
export declare class SearchTodoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
