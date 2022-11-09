export var IpAddressStatusEnum;
(function (IpAddressStatusEnum) {
    IpAddressStatusEnum["Creating"] = "CREATING";
    IpAddressStatusEnum["FailedCreation"] = "FAILED_CREATION";
    IpAddressStatusEnum["Attaching"] = "ATTACHING";
    IpAddressStatusEnum["Attached"] = "ATTACHED";
    IpAddressStatusEnum["RemapDetaching"] = "REMAP_DETACHING";
    IpAddressStatusEnum["RemapAttaching"] = "REMAP_ATTACHING";
    IpAddressStatusEnum["Detaching"] = "DETACHING";
    IpAddressStatusEnum["FailedResourceGone"] = "FAILED_RESOURCE_GONE";
    IpAddressStatusEnum["Deleting"] = "DELETING";
    IpAddressStatusEnum["DeleteFailedFasExpired"] = "DELETE_FAILED_FAS_EXPIRED";
})(IpAddressStatusEnum || (IpAddressStatusEnum = {}));
