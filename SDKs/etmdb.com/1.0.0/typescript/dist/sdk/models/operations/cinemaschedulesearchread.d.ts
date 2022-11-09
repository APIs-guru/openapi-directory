import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class CinemaScheduleSearchReadPathParams extends SpeakeasyBase {
    movieTitle: string;
}
export declare class CinemaScheduleSearchReadRequest extends SpeakeasyBase {
    pathParams: CinemaScheduleSearchReadPathParams;
}
export declare class CinemaScheduleSearchReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
