import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetEnvironmentsPathParams extends SpeakeasyBase {
    productId: string;
}
export declare class GetEnvironmentsRequest extends SpeakeasyBase {
    pathParams: GetEnvironmentsPathParams;
}
export declare class GetEnvironmentsResponse extends SpeakeasyBase {
    contentType: string;
    environmentModelHaljsons?: shared.EnvironmentModelHaljson[];
    environmentModels?: shared.EnvironmentModel[];
    statusCode: number;
}
