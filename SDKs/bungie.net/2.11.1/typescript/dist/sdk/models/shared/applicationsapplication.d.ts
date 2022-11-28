import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationsApplicationDeveloper } from "./applicationsapplicationdeveloper";
export declare class ApplicationsApplication extends SpeakeasyBase {
    applicationId?: number;
    creationDate?: Date;
    firstPublished?: Date;
    link?: string;
    name?: string;
    origin?: string;
    redirectUrl?: string;
    scope?: number;
    status?: number;
    statusChanged?: Date;
    team?: ApplicationsApplicationDeveloper[];
}
