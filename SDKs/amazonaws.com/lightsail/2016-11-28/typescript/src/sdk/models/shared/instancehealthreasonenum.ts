


export enum InstanceHealthReasonEnum {
    LbRegistrationInProgress = "Lb.RegistrationInProgress",
    LbInitialHealthChecking = "Lb.InitialHealthChecking",
    LbInternalError = "Lb.InternalError",
    InstanceResponseCodeMismatch = "Instance.ResponseCodeMismatch",
    InstanceTimeout = "Instance.Timeout",
    InstanceFailedHealthChecks = "Instance.FailedHealthChecks",
    InstanceNotRegistered = "Instance.NotRegistered",
    InstanceNotInUse = "Instance.NotInUse",
    InstanceDeregistrationInProgress = "Instance.DeregistrationInProgress",
    InstanceInvalidState = "Instance.InvalidState",
    InstanceIpUnusable = "Instance.IpUnusable"
}
