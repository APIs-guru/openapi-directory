export var PermissionEnum;
(function (PermissionEnum) {
    PermissionEnum["All"] = "ALL";
    PermissionEnum["Select"] = "SELECT";
    PermissionEnum["Alter"] = "ALTER";
    PermissionEnum["Drop"] = "DROP";
    PermissionEnum["Delete"] = "DELETE";
    PermissionEnum["Insert"] = "INSERT";
    PermissionEnum["Describe"] = "DESCRIBE";
    PermissionEnum["CreateDatabase"] = "CREATE_DATABASE";
    PermissionEnum["CreateTable"] = "CREATE_TABLE";
    PermissionEnum["DataLocationAccess"] = "DATA_LOCATION_ACCESS";
    PermissionEnum["CreateTag"] = "CREATE_TAG";
    PermissionEnum["AlterTag"] = "ALTER_TAG";
    PermissionEnum["DeleteTag"] = "DELETE_TAG";
    PermissionEnum["DescribeTag"] = "DESCRIBE_TAG";
    PermissionEnum["AssociateTag"] = "ASSOCIATE_TAG";
})(PermissionEnum || (PermissionEnum = {}));
