export var ActionEnum;
(function (ActionEnum) {
    ActionEnum["Drop"] = "DROP";
    ActionEnum["ForwardDecapsulated"] = "FORWARD_DECAPSULATED";
    ActionEnum["ForwardAsIs"] = "FORWARD_AS_IS";
    ActionEnum["Passthrough"] = "PASSTHROUGH";
    ActionEnum["DuplicatedDecapsulated"] = "DUPLICATED_DECAPSULATED";
    ActionEnum["DuplicateAsIs"] = "DUPLICATE_AS_IS";
})(ActionEnum || (ActionEnum = {}));
