import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Layers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getV4LayersAsApplied - Retrieve a list of application activities
     *
     * Retrieve a list of application activities. The id in the response is used for  GET /v4/layers/asApplied/{activityId}/contents.
    **/
    getV4LayersAsApplied(req: operations.GetV4LayersAsAppliedRequest, config?: AxiosRequestConfig): Promise<operations.GetV4LayersAsAppliedResponse>;
    /**
     * getV4LayersAsAppliedActivityIdContents - Retrieve the raw application activity
     *
     * Retrieve an individual application activity by id.  Ids are retrieved via the  /layers/asApplied route. Downloads larger than `5MiB` (`5242880 bytes`) in size, must be downloaded in chunks no larger than `5MiB` (`5242880 bytes`) and no smaller than `1MiB`  (`1048576 bytes`). The last chunk could be less than `1MiB` (`1048576 bytes`). The data is compressed using .zip format.
    **/
    getV4LayersAsAppliedActivityIdContents(req: operations.GetV4LayersAsAppliedActivityIdContentsRequest, config?: AxiosRequestConfig): Promise<operations.GetV4LayersAsAppliedActivityIdContentsResponse>;
    /**
     * getV4LayersAsHarvested - Retrieve a list of harvest activities
     *
     * Retrieve a list of harvest activities. The id in the response is used for  GET /v4/layers/asHarvested/{activityId}/contents.
    **/
    getV4LayersAsHarvested(req: operations.GetV4LayersAsHarvestedRequest, config?: AxiosRequestConfig): Promise<operations.GetV4LayersAsHarvestedResponse>;
    /**
     * getV4LayersAsHarvestedActivityIdContents - Retrieve the raw harvest activity
     *
     * Retrieve an individual harvest activity by id.  Ids are retrieved via the  /layers/asHarvested route. Downloads larger than `5MiB` (`5242880 bytes`) in size, must be downloaded in chunks no larger than `5MiB` (`5242880 bytes`) and no smaller than `1MiB`  (`1048576 bytes`). The last chunk could be less than `1MiB` (`1048576 bytes`). The data is compressed using .zip format.
    **/
    getV4LayersAsHarvestedActivityIdContents(req: operations.GetV4LayersAsHarvestedActivityIdContentsRequest, config?: AxiosRequestConfig): Promise<operations.GetV4LayersAsHarvestedActivityIdContentsResponse>;
    /**
     * getV4LayersAsPlanted - Retrieve a list of planting activities
     *
     * Retrieve a list of planting activities. The id in the response is used for  GET /v4/layers/asPlanted/{activityId}/contents.
    **/
    getV4LayersAsPlanted(req: operations.GetV4LayersAsPlantedRequest, config?: AxiosRequestConfig): Promise<operations.GetV4LayersAsPlantedResponse>;
    /**
     * getV4LayersAsPlantedActivityIdContents - Retrieve the raw planting activity
     *
     * Retrieve an individual planting activity by id.  Ids are retrieved via the  /layers/asPlanted route. Downloads larger than `5MiB` (`5242880 bytes`) in size, must be downloaded in chunks no larger than `5MiB` (`5242880 bytes`) and no smaller than `1MiB`  (`1048576 bytes`). The last chunk could be less than `1MiB` (`1048576 bytes`).  The data is compressed using .zip format.
    **/
    getV4LayersAsPlantedActivityIdContents(req: operations.GetV4LayersAsPlantedActivityIdContentsRequest, config?: AxiosRequestConfig): Promise<operations.GetV4LayersAsPlantedActivityIdContentsResponse>;
    /**
     * getV4LayersScoutingObservations - Retrieve a list of scouting observations
     *
     * Retrieve a list of scouting observations created or updated by the user identified by the Authorization header.
    **/
    getV4LayersScoutingObservations(req: operations.GetV4LayersScoutingObservationsRequest, config?: AxiosRequestConfig): Promise<operations.GetV4LayersScoutingObservationsResponse>;
    /**
     * getV4LayersScoutingObservationsScoutingObservationId - Retrieve individual scouting observation
     *
     * Retrieve an individual scouting observation by id.  Ids are retrieved via the /layers/scoutingObservations route.
    **/
    getV4LayersScoutingObservationsScoutingObservationId(req: operations.GetV4LayersScoutingObservationsScoutingObservationIdRequest, config?: AxiosRequestConfig): Promise<operations.GetV4LayersScoutingObservationsScoutingObservationIdResponse>;
    /**
     * getV4LayersScoutingObservationsScoutingObservationIdAttachments - Retrieve attachments associated with a given scouting observation.
     *
     * Retrieve attachments associated with a given scouting observation. Photos added to scouting notes in the FieldView app are capped to 20MB, and we won’t store photos larger than that in a scouting note.
    **/
    getV4LayersScoutingObservationsScoutingObservationIdAttachments(req: operations.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsRequest, config?: AxiosRequestConfig): Promise<operations.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsResponse>;
    /**
     * getV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContents - Retrieve the binary contents of a scouting observation’s attachment.
     *
     * Photos added to scouting notes in the FieldView app are capped to `20MiB` (`20971520 bytes`), and we won’t store photos larger than that in a scouting note. Downloads larger than `5MiB` (`5242880 bytes`) in size, must be downloaded in chunks no larger than `5MiB` (`5242880 bytes`) and no smaller than `1MiB` (`1048576 bytes`). The last chunk could be less than `1MiB` (`1048576 bytes`).
    **/
    getV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContents(req: operations.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsRequest, config?: AxiosRequestConfig): Promise<operations.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsResponse>;
}
