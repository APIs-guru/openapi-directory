import { SpeakeasyBase } from "../../../internal/utils";
export declare class CommunityProfileFilesCodeOfConductSimple extends SpeakeasyBase {
    htmlUrl: string;
    key: string;
    name: string;
    url: string;
}
export declare class CommunityProfileFilesCommunityHealthFile extends SpeakeasyBase {
    htmlUrl: string;
    url: string;
}
export declare class CommunityProfileFilesLicenseSimple extends SpeakeasyBase {
    htmlUrl?: string;
    key: string;
    name: string;
    nodeId: string;
    spdxId: string;
    url: string;
}
export declare class CommunityProfileFiles extends SpeakeasyBase {
    codeOfConduct: CommunityProfileFilesCodeOfConductSimple;
    contributing: CommunityProfileFilesCommunityHealthFile;
    issueTemplate: CommunityProfileFilesCommunityHealthFile;
    license: CommunityProfileFilesLicenseSimple;
    pullRequestTemplate: CommunityProfileFilesCommunityHealthFile;
    readme: CommunityProfileFilesCommunityHealthFile;
}
/**
 * Community Profile
**/
export declare class CommunityProfile extends SpeakeasyBase {
    contentReportsEnabled?: boolean;
    description: string;
    documentation: string;
    files: CommunityProfileFiles;
    healthPercentage: number;
    updatedAt: Date;
}
