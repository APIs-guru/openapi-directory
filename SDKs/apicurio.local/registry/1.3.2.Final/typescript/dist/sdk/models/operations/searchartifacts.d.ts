import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum SearchArtifactsOrderEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum SearchArtifactsOverEnum {
    Everything = "everything",
    Name = "name",
    Description = "description",
    Labels = "labels"
}
export declare class SearchArtifactsQueryParams extends SpeakeasyBase {
    limit: number;
    offset: number;
    order?: SearchArtifactsOrderEnum;
    over?: SearchArtifactsOverEnum;
    search?: string;
}
export declare class SearchArtifactsRequest extends SpeakeasyBase {
    queryParams: SearchArtifactsQueryParams;
}
export declare class SearchArtifactsResponse extends SpeakeasyBase {
    artifactSearchResults?: shared.ArtifactSearchResults;
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
